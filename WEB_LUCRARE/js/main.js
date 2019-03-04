class Worker{
	// String = name;
	// String = surname;
	// number=hourRate;
	// number=hours;

	constructor(name,surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}

	getSalary(){
		this.hourRate * this.hours;
	} 

}

let worker = new Worker('Ion', 'Creanga', 10, 176);
console.log(worker.name);
console.log(worker.surname);//afișează 'Creangă'
console.log(worker.hourRate);//afișează 10
console.log(worker.hours);//afișează 31
console.log(worker.getSalary());//afișează1760= 10*176

//Punctul 2

// let worker = new Worker1('Mihai', 'Eminescu', 8, 200);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.hourRate);
// console.log(worker.hours);