#include <netinet/in.h> // Structure for storing address information
#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h> // For socket APIs
#include <sys/types.h>
#include <string.h>
#include <unistd.h>

#define PORT 9001

int main(int argc, char const *argv[]) 
{
    // Create server socket
    int servSockD = socket(AF_INET, SOCK_STREAM, 0);
    if (servSockD == -1) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Define server address
    struct sockaddr_in servAddr;

    servAddr.sin_family = AF_INET;
    servAddr.sin_port = htons(PORT);
    servAddr.sin_addr.s_addr = INADDR_ANY;

    // Bind socket to the specified IP and port
    if (bind(servSockD, (struct sockaddr*)&servAddr, sizeof(servAddr)) == -1) {
        perror("Binding failed");
        close(servSockD);
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(servSockD, 1) == -1) {
        perror("Listening failed");
        close(servSockD);
        exit(EXIT_FAILURE);
    }
    printf("Server is listening on port %d\n", PORT);

    // Accept a single client connection
    int clientSocket = accept(servSockD, NULL, NULL);
    if (clientSocket == -1) {
        perror("Connection failed");
        close(servSockD);
        exit(EXIT_FAILURE);
    }
    printf("Client connected.\n");

    char serMsg[255]; // Buffer to store messages
    while (1) {
        // Get input from the server user
        printf("Enter message to send (type 'exit' to terminate): ");
        if (fgets(serMsg, sizeof(serMsg), stdin) == NULL) 
        {
            printf("\n");
            break;
        }
        // Send the message to the client
        send(clientSocket, serMsg, strlen(serMsg), 0);

        // Check for termination condition
        if (strcmp(serMsg, "exit\n") == 0) {
            printf("Terminating connection.\n");
            break;
        }
    }
    sleep(2);
    // Close the sockets
    close(clientSocket);
    close(servSockD);
    printf("Server shut down.\n");

    return 0;
}
