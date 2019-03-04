class Worker{

	constructor(name,surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}

	getSalary(){
		return this.hourRate * this.hours;
	} 

	getName(){
	return this.name;
}

getSurname(){
	return this.surname;
}

getRate(){
	return this.hourRate;
}

getHours(){
	return this.hours;
}
increaseSalary(a){
	this.hourRate += a;
}

}

let worker = new Worker('Ion', 'Creanga', 10, 176);
console.log('Primul lucrator: ');
console.log(worker.getName());
console.log(worker.getSurname());//afișează 'Creangă'
console.log(worker.getRate());//afișează 10
console.log(worker.getHours());//afișează 31();
worker.increaseSalary(2);
console.log(worker.getSalary());//afișează1760= 10*176

//Punctul 2

let worker1 = new Worker('Mihai', 'Eminescu', 8, 200);
console.log('Cel de-al doilea lucrator:');
console.log(worker1.getName());
console.log(worker1.getSurname());
console.log(worker1.getRate());
console.log(worker1.getHours());
worker1.increaseSalary(2);
console.log(worker1.getSalary());

let SalaryMax = worker.getSalary()>worker1.getSalary()?worker.name:worker1.name;
console.log('Cel mai mare salariu il are: ', SalaryMax);


