#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>


unsigned long long enc(long long int base, long long exponent, long long modulus) {
    if (modulus == 1) {
        return 0;
    }

    unsigned long long result = 1;
    base = base % modulus;

    while (exponent > 0) {
        // If the current exponent bit is set
        if (exponent % 2 == 1) {
            result = (result * base) % modulus;
        }
        // Shift exponent to the right by 1 bit
        exponent = exponent / 2;
        // Square the base
        base = (base * base) % modulus;
    }

    return result;
}
unsigned long long dec(long long int base, long long exponent, long long modulus) {
    if (modulus == 1) {
        return 0;
    }

    unsigned long long result = 1;
    base = base % modulus;

    while (exponent > 0) {
        // If the current exponent bit is set
        if (exponent % 2 == 1) {
            result = (result * base) % modulus;
        }
        // Shift exponent to the right by 1 bit
        exponent = exponent / 2;
        // Square the base
        base = (base * base) % modulus;
    }

    return result;
}
int gcd(long long int a , long long int b){
    if((a % b) != 0){
        b = gcd(b , a % b);
        return b;
    }else{
        if(b < 0){
            b = b * (-1);
        }
        return b;
    }
}
int F(long long int N){
    int i = 0;
    for(int k =1 ; k < N ; k++){
        if(gcd(N , k ) == 1){
            i++;
        }
    }
    return i;
}
int prime(long long int a){
    int k = 1;
    for(int i = 2 ; i < a ; i++){
        if((a % i) == 0){
            k++;
        } 
    }
    if(k==1){
        return 0;
    }else {
        return 1;
    }
}


int main(int argc , char * argv[]){
    long long int m;
    
    if(argc != 6){
        printf("Usage: %s  enc|dec <exp_exp> <priv_exp> <prime1> <prime2>\n" , argv[0]);
        return 1;
    }
    long long int e,d,p,q;
    char *endptr1 , *endptr2 ,*endptr3 ,*endptr4;

    e = strtoll(argv[2] , &endptr1 , 10);
    d = strtoll(argv[3] , &endptr2 , 10);
    q = strtoll(argv[4] , &endptr3 , 10);
    p = strtoll(argv[5] , &endptr4 , 10);
    long long int N = p*q;

    

    if(!strcmp(argv[1], "enc") || !strcmp(argv[1] , "dec")){
        //empty
    }else{
        printf("First argument must be 'enc' or 'dec'\n");
        return 1;
    }
    if(*endptr1 != '\0' || *endptr2 != '\0' || *endptr3 != '\0' || *endptr4 != '\0'){
        printf("Usage: %s  enc|dec <exp_exp> <priv_exp> <prime1> <prime2>\n" , argv[0]);
        return 1;
    }

    if(e <= 0 || d <= 0 || q <= 0 || p <= 0){
        printf("Negative numbers are not allowed\n");
        return 1;
    }
    if(prime(q) == 1 || prime(p) == 1 ){
        printf("p and q must be prime\n");
        return 1;
    }
    if(gcd(e,F(N)) != 1){
        printf("e is not coprime with phi(N)\n");
        return 1;
    }
    if((e*d) % F(N) != 1){
        printf("e * d mod phi(N) is not 1\n");
        return 1;
    }

    int kurwa = scanf("%lld" , &m); 
    if(kurwa) NULL;
    int i = m;
    i = getchar();
    if((i >= 'a' && i<= 'z')){ 
        return 1; 
    }
    if(m <= 0){
        printf("Negative numbers are not allowed\n");
        return 1;
    }
    if(m < -1000000000000000000 || m > 1000000000000000000){
        return 1; 
    }  
    if(N <= m){
        printf("Message is larger than N\n");
        return 1;
    }
    
    
    if(!strcmp(argv[1], "enc")){  
        //printf("enc\n");
        printf("%llu\n" , enc(m , e ,N));
        return 0;

    }else if(!strcmp(argv[1], "dec")){
        //printf("dec\n");
        printf("%llu\n" , dec(m ,d, N));
        return 0;

    }
}