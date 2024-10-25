let firstname = 'Philip';
               
if(firstname == 'ALLEN')
{
    console.log("Last name is Young");
}

else if(firstname == 'Michael')
{
    console.log("Last Name is Jordan");
}

else if(firstname == 'bruno')
{
        console.log("Last Name is Mars");
}

else 
{
    
    console.log("Invalid Name");
}


let gcash_amount = 10000; 
let fee = 0;
let totalAmountPaid = 0;

if(gcash_amount < 500)
{
    fee = 10;
    totalAmountPaid = gcash_amount + fee;
    console.log("Total Value:"+totalAmountPaid)
}

else if(gcash_amount > 500 && gcash_amount < 1000)
{
    fee = 20;   
    totalAmountPaid = gcash_amount + fee;
    console.log("Total Value:"+totalAmountPaid)
}

else 
{
    fee = gcash_amount * 0.03; 
    totalAmountPaid = gcash_amount + fee;
    console.log("Total Value:"+totalAmountPaid)
}



let day = "Wednesday";

switch (day) 
{
    case "Monday":
        console.log("First day of the week");
        break; 

    case "Tuesday":
        console.log("Second day of the week");
        break;     
        
        case "Wednesday":
            console.log("Third day of the week");
            break; 

            case "Thursday":
                console.log("Fourth day of the week");
                break; 

                default: 
                console.log("invalid day");

    
}

// let gcashAmount = 50; 

// const theResult = gcashAmount < 500 ? console.log("Fee is 10") : console.log("Fee is 20");


let gcashAmount = 1290; 
const theResultTwo =  gcashAmount < 500 ? console.log("Fee is 10") : ( gcashAmount > 500 && gcashAmount < 1000 ? console.log("Fee is 20") : console.log("Fee is 30") );

let firtName = 'Lloyd';


for(let x=0;x<50;x++)
{
    console.log(firtName);
}

let x = 0;
while(x<50)
{
    console.log(firtName);
    x++;
}

let y = 0;
do
{
    console.log(firtName);
    y++;
}
while(y<50);

for(let x=0;x<50;x++)
    {

        if(x == 10)
        {
            break;
        }

        console.log(firtName);
    }




