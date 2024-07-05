#include <iostream>
using namespace std;

void Name(string name,int n){
    if(n==0){
        cout<<name<<endl; 
    }else{
        cout<<name<<endl;
        n--;
        Name(name, n);
    }
}
void reverse(int n){
    if(n==0){
        return;
    }
    cout<<n;
    n--;
    reverse(n);
}
int factorial(int f){
    if (f==0){
        return 1;
    }else{
        return f*factorial(f-1);
    }
}


int main(){
 //int n;
 //int a;
 int f;
 //string name;
 //cin>>n;
 //cin>>a;
 cin>>f;
 //cin>>name;
//Name(name,n);
//reverse(a);
cout<<factorial(f)<<endl;
}
