#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";

    
    // Declare second integer, double, and String variables.
    int ii;
    double dd;
    char ss[79];
    // Read and save an integer, double, and String to your variables.
    scanf("%i", &ii);
    scanf("%lf", &dd);
    // scanf("%s[^\n]", ss);
    // Clear the input buffer
    while (getchar() != '\n');
    // Read a line of text including spaces
    fgets(ss, sizeof(ss), stdin);
    // Print the sum of both integer variables on a new line.
    int sum1 = i + ii;
    printf("%i\n", i + ii);
    // Print the sum of the double variables on a new line.
    double sum2 = d + dd;
    printf("%.1lf\n", d + dd);
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    printf("%s%s", s, ss);

    return 0;
}