#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    // Declare a variable named 'input_string' to hold our input.
    char input_string[105]; 
    
    /* Read a full line of input from stdin and save it to our variable, input_string.

    %: This character begins the format specifier for scanf. It indicates that what follows is not to be taken literally as input but rather as a pattern that the input should match.

    [: This character starts a scanset. A scanset tells scanf to read characters only if they match the characters specified in the scanset. The scanset ends with a ].

    ^: When used at the beginning of a scanset (immediately after the opening [), this character acts as a negation operator. It inverts the selection of characters to be read, meaning scanf will read characters that do NOT match those specified after the ^.

    \n: This represents the newline character. In the context of this scanset, it means that scanf will read all characters up to (but not including) the first newline character it encounters. Since the ^ negates the selection, \n is the character that scanf will stop reading at, rather than the character it will read.

    ]: This character ends the scanset.
    */
    scanf("%[^\n]", input_string); 
    
    // Print a string literal saying "Hello, World." to stdout using printf.
    printf("Hello, World.\n");
    
    // TODO: Write a line of code here that prints the contents of input_string to stdout.
    printf("%s", input_string);
    
    return 0;
}