#include<bits/stdc++.h>
using namespace std;

void swastik(int size) {
    // Size should be odd for symmetry
    if (size % 2 == 0) {
        size++;
    }
    
    int mid = size / 2;
    
    // Create a 2D grid
    vector<vector<char>> grid(size, vector<char>(size, ' '));
    
    // Draw the swastik pattern
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            // Vertical line (middle column)
            if (j == mid) {
                grid[i][j] = '*';
            }
            // Horizontal line (middle row)
            if (i == mid) {
                grid[i][j] = '*';
            }
            
            // Top-left arm (horizontal)
            if (i == 0 && j <= mid) {
                grid[i][j] = '*';
            }
            
            // Top-right arm
            if (i < mid && j > mid) {
                grid[i][size - 1] = '*';
            }
            
            // Bottom-right arm (horizontal)
            if (i == size - 1 && j >= mid) {
                grid[i][j] = '*';
            }

            // Bottom-left arm
            if (i > mid && j < mid) {
                grid[i][0] = '*';
            }
            
        }
    }
    
    // Print the grid
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            cout << grid[i][j] << " ";
        }
        cout << endl;
    }
}

int main(){
    int n;
    cin>>n;
    
    swastik(n);
    cout<<endl;
    return 0;
}