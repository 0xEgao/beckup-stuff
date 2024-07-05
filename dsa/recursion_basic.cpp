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


int main(){
 int n;
 string name;
 cin>>n;
 cin>>name;
Name(name,n);
}
