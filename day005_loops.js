function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for (let i=1; i<=10; i++) {
        console.log(`${n} x ${i} = ${n*i}`)
    }
}

// Time complexity: O(1)

/** Just for fun... let's see it in Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + n * i);
        }
        
        scanner.close();
    }
}

 */