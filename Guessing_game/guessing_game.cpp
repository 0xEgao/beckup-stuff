#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
int main(){
    srand(time(0));
    int number = rand() % 100 + 1;
    int guess;
    cout << "Guess a number between 1 and 100: ";
    while(guess !=number){
    cin >> guess;
        if (guess > number){
            cout << "Too high! Guess again: ";
        }
        else if (guess<number)
        {
            cout << "Too low! Guess again: ";
        }
        else{
            cout << "Correct! The number was " << number << endl;
        }
    }
}