#include<bits/stdc++.h>
using namespace std;
/*
class = blueprint (Student)
object = instance (s), 
functions(methods or member func), 
variables(data members)
*/

//userdefined data type
class Student{
public:
    string name;
    int rollNo;
    float gpa;
};


//Passing Objects to functions ************************** */
void print(Student s){
    cout<<s.name<<" "<<s.rollNo<<" "<<s.gpa<<endl;
}

//pass by value
void change1(Student s){
    s.gpa = 10;
}
//pass by reference
void change2(Student &s){         
    s.gpa = 10;
}
//******************************************************* */


/*Constructor********************************************* */
class Stud{
public:
    string name;
    int rollNo;
    float gpa;
    
    // Stud(){}                                 //default constructor

    Stud(string n, int r, float g){          //parameterized constructor
        name = n;
        rollNo = r;
        gpa = g;
    }
};
/*********************************************************** */

/*THIS KEYWORD *********************************************** */
class Cricketer{
public:
    string name;
    int runs;

    /* it gives garbage value
    Cricketer(string name, int runs){
        name = name;
        runs = runs;
    }
    */

    Cricketer(string name, int runs){
        this->name = name;
        this->runs = runs;
    }
};
/*********************************************************** */


/*FUNCTIONS INSIDE CLASS ********************************** */
class Cricketer2{
public:
    string name;
    int runs;
    float avg;

    Cricketer2(string name, int runs, float avg){
        this->name = name;
        this->runs = runs;
        this->avg  = avg;
    }

    void print(int runs){
        cout<<"Name : "<<name<<" Runs : "<<this->runs<<" Avg : "<<avg<<endl;
        cout<<runs;
    }

    int matches(){
        return runs/avg;
    }
};
/********************************************************** */


/*OBJECTS POINTER ********************************** */
class Cricketer3{
public:
    string name;
    int runs;
    float avg;

    Cricketer3(string name, int runs, float avg){
        this->name = name;
        this->runs = runs;
        this->avg  = avg;
    }
};
void change3(Cricketer3 * c){
    // (*c).avg = 77.2;
    c->avg = 77.2;                    //same as above
}
/********************************************************** */


/*DYNAMIC ALLOCATION ********************************** */
class Cricketer4{
public:
    string name;
    int runs;
    float avg;

    Cricketer4(string name, int runs, float avg){
        this->name = name;
        this->runs = runs;
        this->avg  = avg;
    }
};
/********************************************************** */


/*USER DEFINDE DATA STRUCTURE ********************************** */
class Vector{
public:
    int size;
    int capacity;
    int *arr;

    Vector(){
        size = 0;
        capacity = 1;
        arr = new int[1];
    }

    void push_back(int ele){
        if(size == capacity){
            capacity *= 2;                       //incr capacity twice
            int *arr2 = new int[capacity];       //make new arr
            for(int i = 0; i < size; i++){       //copy arr1 to arr2
                arr2[i] = arr[i];
            }
            arr = arr2;                          //make arr2 is default arr1
        }
        arr[size] = ele;                         //simple push ele
        size++;
    }

    void print(){
        for(int i = 0; i < size; i++){
            cout<<arr[i] << " ";
        }
        cout<<endl;
    }

    int getValByIdx(int idx){
        if(size == 0){
            cout<<"Array is Empty"<<endl;
            return -1;
        }
        if(idx >= size || idx < 0){
            cout<<"Invalid Idx"<<endl;
            return -1;
        }
        return arr[idx];
    }

    void pop_back(){
        if(size == 0) cout<<"Array is Empty"<<endl;
        size--;
    }
};

/********************************************************** */


/*ACCESS MODIFIERS ********************************** */
//PUBLIC, PROTECTED, PRIVATE
class Students{
private: 
    float marks;
public:
    string name;
    int rollNo;

    Students(string name, int rollNo, float marks){
        this->name = name;
        this->rollNo = rollNo;
        this->marks = marks;
    }

    float getMarks(){             //getter
        return marks;
    }

    void setMarks(float m){       //setter
        marks = m;
    }
};

/********************************************************** */


/*INHERITANCE ********************************** */
//single inheritance
class Scooty{               //base / parent class
public:
    int topSpeed;
    float milage;
};
class Bike : public Scooty{        //derived / child class
public:
    int gears;
};

//multi-Level inheritance
class Vehicle{
public:
    int topSpeed;
    float milage;
    string fuelType;
};
class TwoWheeler : public Vehicle{               //base / parent class
public:

};
class Bikes : public TwoWheeler{        //derived / child class
public:
    int gears;
};

//multiple inheritance
class Crick{
public:
    int runs;
    int wickets;
    int avg;
};
class Engineer{
public:
    int exp;
    string domain;
};
class allRounder : public Crick, Engineer{
public:
    string name;
};
/********************************************************** */


/*POLYMORPHISM ********************************** */
//two types:
/*
1. Compile polymorphism  (method overloading)
2. Run-Time polymorphism (method overloading using virtual function)

errors
1. compile time errors (when writing code eg - syntax error)
2. run-time errors (after exectuing code eg - num / 0)
*/

//1Compile time Polymorphism
//1.1. function overloading
class Loading{
public:
    void sum(string a, string b){
        cout<<a + b<<endl;
    }
    void sum(int a, int b){
        cout<<a + b<<endl;
    }
    void sum(int a, int b, int c){
        cout<<a + b + c<<endl;
    }
    /* it cant be function overloading (allows multiple func with same  name but diff parameters (not on return type))
    int sum(int a, int b){
        cout<<a + b<<endl;
        return a + b;
    }
    */
};

//1.2. operator overloading
class Fraction{
public:
    int numr;
    int denr;

    Fraction(int numr, int denr){
        this->numr = numr;
        this->denr = denr;
    }

    void print(){
        cout<<numr<<" / "<<denr<<endl;
    }

    Fraction add(Fraction f){
        int newNumr = this->numr*f.denr + this->denr*f.numr;
        int newDenr = this->denr*f.denr;
        Fraction ans(newNumr, newDenr);
        return ans;
    }

    Fraction operator+(Fraction f){
        int newNumr = this->numr*f.denr + this->denr*f.numr;
        int newDenr = this->denr*f.denr;
        Fraction ans(newNumr, newDenr);
        return ans;
    }

    Fraction operator-(Fraction f){
        int newNumr = this->numr*f.denr - this->denr*f.numr;
        int newDenr = this->denr*f.denr;
        Fraction ans(newNumr, newDenr);
        return ans;
    }

    Fraction operator*(Fraction f){
        int newNumr = this->numr*f.numr;
        int newDenr = this->denr*f.denr;
        Fraction ans(newNumr, newDenr);
        return ans;
    }
};

//2. Run Time Polymorphism
class Scooties{
private:
    int bootSpace;
public:
    int topSpeed;
    int milage;

    virtual void sound(){
        cout<<"Vroom Vroom"<<endl;
    }
};
class Bikees : public Scooties{
public:
    int gears;
    
    void sound(){
        cout<<"Dhroom Dhroom"<<endl;
    }
};
class superBikees : public Scooties{
public:
    void sound(){
        cout<<"Whroom Whroom"<<endl;
    }
};
/********************************************************** */








int main(){
    Student s;             //Student -> class, s -> object
    s.name = "Shivam Kumar";
    s.rollNo = 19;
    s.gpa = 9;
    
    cout<<s.name<<" "<<s.rollNo<<" "<<s.gpa<<endl;
    // cin>>s.gpa;                //val
    
    //passing objects to functions
    cout<<"using print func :"<<endl;
    print(s);
    change1(s);       
    cout<<"printing after change1 func: "<<endl;
    print(s);
    change2(s);
    cout<<"printing after change2 func: "<<endl;
    print(s);
    
    
    //constructor
    Stud s1("Adi", 23, 8.5);
    cout<<s1.name<<" "<<s1.rollNo<<" "<<s1.gpa<<endl;
    
    Stud s2 = s1;                           //(deep copy [initial value remain intact])
    cout<<"After deep copy : "<<endl;
    s2.name = "vikash";
    cout<<"new : "<<s2.name<<" "<<s2.rollNo<<" "<<s2.gpa<<endl;
    cout<<"After change name no intact (deep copy) : "<<endl;
    cout<<"orig : "<<s1.name<<" "<<s1.rollNo<<" "<<s1.gpa<<endl;
    
    Stud s3(s1);                            //copy constructor
    cout<<"After deep copy using copy constructor : "<<endl;
    s3.name = "Kir";
    cout<<"new : "<<s3.name<<" "<<s3.rollNo<<" "<<s3.gpa<<endl;
    cout<<"After change name no intact (deep copy) : "<<endl;
    cout<<"orig : "<<s1.name<<" "<<s1.rollNo<<" "<<s1.gpa<<endl;


    //this keyword
    Cricketer c1("ViratKohli", 25000);
    Cricketer c2("RohitSharma", 20000);
    cout<<c1.name<<" "<<c1.runs<<" "<<endl;


    //functions inside class
    Cricketer2 c21("Sachin", 100, 88.8);
    c21.print(25);
    cout<<c21.matches()<<endl;

    //object pointer
    Cricketer3 c31("Dhoni", 20000, 80.8);
    Cricketer3 *p1 = &c31;
    cout<<c31.runs<<endl;
    cout<<"using (*p1)" <<(*p1).runs<<endl;       //work same above line
    //a->b (a must be pointer) , or use (*a).b
    cout<<"using p1-> " << p1->runs<<endl;       //work same above line
    (*p1).avg = 90.0;
    cout<<c31.avg<<endl;          //value changed
    change3(&c31);                //change value using deference operator (*c) or arrow (c->)
    cout<<c31.avg<<endl;          //value changed


    //dynamic allocation
    int *p4 = new int(354);        //it is storing pointer (not value)
    cout<<*p4<<endl;

    Cricketer4 *c4 = new Cricketer4("Dravid", 28000, 45.6);
    // cout<<c4.name<<" "<<c4.age;    //gives error (it works for direct intialize not with pointer)
    cout<<c4->name<<" "<<c4->avg<<endl;


    //user defined data structure
    Vector v;
    cout<<v.size<< " "<<v.capacity<<endl;
    v.push_back(10);
    v.print();
    cout<<v.size<< " "<<v.capacity<<endl;
    v.push_back(9);
    v.print();
    cout<<v.size<< " "<<v.capacity<<endl;
    v.push_back(7);
    v.print();
    cout<<v.size<< " "<<v.capacity<<endl;
    
    v.getValByIdx(5);
    v.pop_back();
    v.print();
    cout<<v.size<< " "<<v.capacity<<endl;


    //Access modifiers
    Students ss("Rahul", 18, 90.3);
    cout<<"Get Marks by using getter : "<<ss.getMarks()<<endl;
    ss.setMarks(98.5);
    cout<<"After updating using setter : "<<ss.getMarks()<<endl;


    //inheritance
    Bike b1;
    b1.topSpeed = 180;
    b1.milage = 50.5;
    b1.gears = 5;

    
    //polymorphism
    //1. Compile Time 
    //1.1. Function Overloading
    Loading l;
    l.sum("Shivam", "Kumar");
    l.sum(5, 5);
    l.sum(5,5,5);

    //1.2. Operator Overloading
    Fraction f1(1, 2);
    Fraction f2(1, 3);
    f1.print();
    f2.print();
    Fraction f3 = f1.add(f2);
    f3.print();
    Fraction f4 = f1 + f2;
    f4.print();
    Fraction f5 = f1 - f2;
    f5.print();
    Fraction f6 = f1 * f2;
    f6.print();

    //2. Runtime polymorphism
    //2.1 Virtual Function & Overriding
    Scooties* sc = new Scooties();
    sc->sound();                      //vroom vroom
    Bikees* bi = new Bikees();
    bi->sound();                      //dhroom dhroom
    Scooties* sc2 = new Bikees();     //here overriding
    sc2->sound();                     //dhroom dhroom
    Scooties* sc3 = new superBikees();
    sc3->sound();                     //whroom whroom
    //used in store same data type(here class) like vector
    vector<Scooties*>vec;
}