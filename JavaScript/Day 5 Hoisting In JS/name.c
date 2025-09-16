#include <stdio.h>

// Correct way to define a function outside of main()

int main()
{
    int a = 1;
    // You can call the function from main()
    getName();
    printf("\n%d", a);


    return 0;
}

void getName()
{
    printf("This is my name");
}