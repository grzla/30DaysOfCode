#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

#define MAX_NAME_LENGTH 100
#define MAX_PHONE_LENGTH 20
#define HASH_TABLE_SIZE 1000

typedef struct Entry
{
    char name[MAX_NAME_LENGTH];
    char phone[MAX_PHONE_LENGTH];
    struct Entry *next;
} Entry;

unsigned int hash(const char *str)
{
    unsigned int hash = 0;
    while (*str)
    {
        hash = (hash << 5) + *str++;
    }
    return hash % HASH_TABLE_SIZE;
}

int main()
{
    Entry *hashTable[HASH_TABLE_SIZE] = {NULL};
    int n;
    scanf("%d", &n); // Read the number of entries

    char name[MAX_NAME_LENGTH];
    char phone[MAX_PHONE_LENGTH];

    // Read the name-phone number pairs
    for (int i = 0; i < n; i++)
    {
        scanf("%s %s", name, phone);
        unsigned int index = hash(name);
        Entry *newEntry = (Entry *)malloc(sizeof(Entry));
        strcpy(newEntry->name, name);
        strcpy(newEntry->phone, phone);
        newEntry->next = hashTable[index];
        hashTable[index] = newEntry;
    }

    // Query the phone numbers by name
    while (scanf("%s", name) != EOF)
    {
        unsigned int index = hash(name);
        Entry *entry = hashTable[index];
        int found = 0;
        while (entry != NULL)
        {
            if (strcmp(entry->name, name) == 0)
            {
                printf("%s=%s\n", name, entry->phone);
                found = 1;
                break;
            }
            entry = entry->next;
        }
        if (!found)
        {
            printf("Not found\n");
        }
    }

    // Free allocated memory
    for (int i = 0; i < HASH_TABLE_SIZE; i++)
    {
        Entry *entry = hashTable[i];
        while (entry != NULL)
        {
            Entry *temp = entry;
            entry = entry->next;
            free(temp);
        }
    }

    return 0;
}