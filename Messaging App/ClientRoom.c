#include <netinet/in.h> //structure for storing address information 
#include <stdio.h> 
#include <stdlib.h> 
#include <sys/socket.h> //for socket APIs 
#include <sys/types.h> 
#include <unistd.h>
#include <string.h>

#define PORT 9001

int main(int argc, char * argv[]) 
{ 
	int sockD = socket(AF_INET, SOCK_STREAM, 0); 

	struct sockaddr_in servAddr; 

	servAddr.sin_family = AF_INET; 
	//establishing connection with port
	servAddr.sin_port 
		= htons(PORT); // use some unused port number 
	servAddr.sin_addr.s_addr = INADDR_ANY; 
	int connectStatus = connect(sockD, (struct sockaddr*)&servAddr, sizeof(servAddr)); 
	if (connectStatus == -1) { 
		printf("Error...\n"); 
	}else {
		char strData[255];
        char tmp[255] = {" "};
		// Infinite loop until termination condition
        while (1) { 
            memset(strData, 0, sizeof(strData)); // Clear the buffer before receiving data
            int bytesReceived = recv(sockD, strData, sizeof(strData) - 1, 0); // Reserve space for null-terminator
            if (bytesReceived > 0) {
                strData[bytesReceived] = '\0'; // Null-terminate the received data
                if (strcmp(strData, "exit\n") != 0) {
                    if (strcmp(strData, tmp) != 0) {
                        printf("Message: %s", strData);
                        strcpy(tmp, strData); // Update the last received message
                    }
                } else {
                    printf("Communication Terminated\n");
					// Exit the loop when "exit" is received from the serverSS
                    break; 
                }
            } else if (bytesReceived == 0) {
                printf("Server disconnected.\n");
				// Exit the loop when the server disconnects
                break; 
            } else {
				// Exit the loop on error
                perror("Error receiving data");
                break; 
            }
        }
	//close the socket for multimple usages after the code ends
	close(sockD);
	}
	return 0; 
}
