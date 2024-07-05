#include <iostream>
#include <math.h>
using namespace std;
void armstrong(int n){
    int digit=(int)(log10(n)+1);
    int sum=0;
    int ans=n;
    while(ans>0){
        int lastdigit=ans%10;
        sum=sum+pow(lastdigit,digit);
        ans=ans/10;
    }
    if(n==sum){
        cout<<"True";
    }else{
        cout<<"False";
    }
}
int main(){
    int n;
    cin>>n;
    cout<<"does "<<n<<" is a armstrong number :";
    armstrong(n);
}