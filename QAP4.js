//Motel Customer Object
const MotelCustomer = {
//Customer Attributes
    name:"John Doe",
    birthDate: new Date("1990-05-15"),
    gender: "Male",
    roomPreferences:["Non-smoking", "King Bed"],
    paymentMethod: "Credit Card",
    mailingAddress:{
        street:"123 Main St",
        city: "St.John's",
        state: "NL",
        postalCode: "Q2E4T2",
    },
    phoneNumber: "(709)555-1234",
    checkInDate: new Date("2023-01-10"),
    checkOutDate: new Date("2023-01-15"),

//Calculating Age
    calculateAge: function(){
        const today = new Date();
        const birthYear = this.birthDate.getFullYear();
        const currentYear = today.getFullYear();
        return currentYear - birthYear;
    },

//Calculating duration of stay
    calculateStayDuration: function(){
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const checkInTime = this.checkInDate.getTime();
        const checkOutTime = this.checkOutDate.getTime();
        const durationInDays = Math.round((checkOutTime - checkInTime)/ millisecondsInDay);
        return durationInDays;
    },
    
// Generate customer description
    generateCustomerDescription: function() {
        return `Customer ${this.name}, a ${this.calculateAge()}-year-old ${this.gender.toLowerCase()}, has booked a room with the following preferences: ${this.roomPreferences.join(", ")}. The stay is scheduled from ${this.checkInDate} to ${this.checkOutDate}. The payment will be made using ${this.paymentMethod}. Contact details: ${this.phoneNumber}, ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.state} ${this.mailingAddress.postalCode}.`;
    }
};
    
    

    let customerDescription;
    customerDescription = MotelCustomer.name
    customerDescription = MotelCustomer.generateCustomerDescription();
    html = `<p> ${customerDescription}</p>`;


console.log(customerDescription);
document.body.innerHTML = html;
