#include<stdio.h>
#include<conio.h>
main(){
    int array[20], temp[20],n_size, n_index, i,j, dec, dec2;
    printf("Enter first 6 elements");
    for(i=0;i<6;i++){
        printf("Enter %dth num", i+1);
        scanf("%d", array[i]);
    }
    for(i=0;i<6;i++){
        temp[i]= array[i];
    }
    printf("Do you want to enter new array inside?");
    scanf("&d", dec);
    if(dec == 1){
            printf("Enter new Array size");
    scanf("%d", n_size);
    
    printf("Enter new array starting index:");
    scanf("&d",n_index);

    for(i=0;i<n_size;i++){
    printf("Enter new array element for %d index", i);
        scanf("&d",array[i+n_size]);
        if(i=n_size-1){
            for(j=n_size+1;j<20; j++){
                array[j_size+1]=j - n_size;
            }
        }
    }
    }
    else{
        printf("Press 1 to print existing array.");
        printf("Press 2 to exit.")
        scanf("%d", dec2);
        if(dec2 == 1 ){
            for(i=0;i<6;i++){
                printf("%d", temp[i])
            }
        }
        else{
            exit();
        }
    }
}