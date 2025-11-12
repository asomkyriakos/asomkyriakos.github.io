#include <stdio.h>

#define LIMIT 1000000000000000ULL   // Οι αριθμοί πρέπει να είναι μικρότεροι ή ίσοι του 10^15

int main(void) {
    unsigned long long n;
    unsigned long long max_len;
    char mode;

    printf("Please give the number to start the aliquot sequence from:");    // Ζητάμε τον αριθμό που ξεκινά η ακολουθία
     if (scanf("%llu", &n) != 1 || n == 0 || n > LIMIT){ 
          printf("Number exceeds maximum supported integer (1000000000000000). Stopping.");
           return 1; 
          }     // Έλεγχος εγκυρότητας τιμής εισόδου
 
    printf("Provide the max aliquot length to look for (0 for unlimited):");
    if (scanf("%llu", &max_len) !=1) return 1;    // Έλεγχος εγκυρότητας τιμής εισόδου  

    printf("Do you want to print the full sequence ('f') or just the length ('l')?");
    if (scanf(" %c",&mode) !=1 || mode !='f' && mode !='l') return 1;       // Έλεγχος εγκυρότητας εισόδου


   unsigned long long term = n;    
   unsigned long long length = 0; // Αρχικό μήκος είναι 1

   if( mode=='f') printf("%llu", term ); // Τυπώνουμε τον πρώτο όρο αν ζητηθεί η πλήρης ακολουθία

   while( term != 0 &&( max_len == 0 || length < max_len) && term <= LIMIT ) {
     unsigned long long sum = 0;
     unsigned long long i;
   
     for( i=1; i< term; i++) {
        if(term % i == 0) sum=sum+ i;  // Αν ο i είναι διαιρέτης προστήθεται στο άθροισμα 
    
        if (sum> LIMIT) {            // Έλεγχος για ξεπέραση ορίου
        printf("Error: Number exceeds maximum supported integer (1000000000000000). Stopping");
            return 1;
         }

        }
            term= sum;  // Ο επόμενος όρος της ακολουθίας
            length++ ;   // Αυξάνουμε το μήκος κατά μια μονάδα
    
     if (mode== 'f') printf(" %llu", term);
   }

    if ( mode== 'l') printf("%llu\n", length);
    else printf("\n");

    return 0;
}

