#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <stdint.h>

unsigned long long int semiprime1(uint64_t a){
    uint64_t k =3;
    uint64_t s1 = 0;
    uint64_t i =1;
    int flag = 0;
    

    if((a % 2) == 0){
        s1 = 2;
        return s1;
    }
    if((a % 3) == 0){
        s1 = 3;
        return s1;
    }
    while(flag == 0 && k*k <= a ){

        // mod 5 ? mod 3?
        if(a % k == 0){
            s1 =k;
            flag = 1;
            return s1;
        }else{
            k =3+(i*2);
            i = i+1;
        }
        if(a % k == 0){
            s1 =k;
            flag =1;
            return s1;
        }else{
            k =3+(i*2);
            i =i+2;
        }
    }
    return s1;
}


int main(int argc , char * argv[]){

    if(argc != 2){
        printf("Usage: %s <semiprime>\n" , argv[0]);
        return 1;
    }
    long long int test;
    uint64_t a,s1,s2;
    char *endptr1;
    test = strtoll(argv[1] , &endptr1 , 10);
    if(test <= 0){
        printf("Usage: %s <semiprime>\n" , argv[0]);
        return 1;
    }
    a = strtoll(argv[1] , &endptr1 , 10);
    s1 = semiprime1(a);
    s2 = a/s1;
    printf("Factors: %lu %lu\n" , s1 ,s2);
    return 0;
}
