#include <stdio.h>
#include <math.h>
#include <stdlib.h>


unsigned long long int C3(unsigned long long int n){
    if (n<10) return n;
    return n%10 + C3(n/10);
}



int prime(unsigned long long int k){
    int s = 1;
    for(unsigned long long int i = 2 ; i < k ; i++){
        if((k % i) == 0){
            s++;
        } 
    }
    if(s==1){
        return 0;
    }else {
        return 1;
    }
}
// αθροισμα ψηγιων /3 != 0
unsigned long long int semiprime1(unsigned long long int a){
    unsigned long long int k;
    unsigned long long int s1 = 2;
    
    if((a % 2) == 0){
        s1 =2;
        return s1;
    }else{
        for( k = 3 ; k*k <= a ; k = k+2  ){
            if((k % 10 != 5) || (k == 5)){
                if(C3(k) % 3 != 0 || k == 3){
                    if(a % k == 0){
                        if(prime(k) == 0){
                            if((a % k) == 0 ){
                                s1 = k;
                                break;
                            }
                        }
                    }
                }
            }
        }
        return s1;
    }
    return s1;
}




int main(int argc , char * argv[]){

    if(argc != 2){
        printf("Usage: %s <semiprime>\n" , argv[0]);
        return 1;
    }
    long long int test;
    unsigned long long int a,s1,s2;
    char *endptr1;
    test = strtoll(argv[1] , &endptr1 , 10);
    a = strtoll(argv[1] , &endptr1 , 10);
    if(test < 0){
        return 1;
    }
    s1 = semiprime1(a);
    s2 = a/s1;
    printf("Factors: %llu %llu\n" , s1 ,s2);
    return 0;
}
