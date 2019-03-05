window.onload = function(){
	let worker1 = new Worker('Ion', 'Creanga', 10, 176);
	let worker2 = new Worker('Mihai', 'Eminescu', 18, 200);
	let worker3 = new Worker('Anatol', 'Botnari', 10, 210);
	let workers = [worker1, worker2, worker3];
	for(let i = 0; i < workers.length; i++){
		console.log(workers[i].getName());
		console.log(workers[i].getSurname());
		console.log(workers[i].getRate());
		console.log(workers[i].getHours());
		workers[i].increaseSalary(2);
		console.log(workers[i].getSalary());
		workers[i].setTax(18);
		console.log(workers[i].getSalaryNetto(18));
	}

	let maxSalary = worker1.getSalary()>worker2.getSalary()?worker1.name:worker2.name;
	console.log("Lucratorul cu salariul mai mare este: ", maxSalary, ". Salariul este mai mare cu: " , Math.abs(worker2.getSalary() - worker1.getSalary()));
}

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
	setTax(i){
		return (this.getSalary()*i)/100;
	}
	getSalaryNetto(i){
		return (this.getSalary() - this.setTax(i));
	}


}

// let worker = new Worker('Ion', 'Creanga', 10, 176);
// console.log('Primul lucrator: ');
// console.log(worker.getName());
// console.log(worker.getSurname());//afișează 'Creangă'
// console.log(worker.getRate());//afișează 10
// console.log(worker.getHours());//afișează 31();
// worker.increaseSalary(2);
// console.log(worker.getSalary());//afișează1760= 10*176

// //Punctul 2

// let worker1 = new Worker('Mihai', 'Eminescu', 8, 200);
// console.log('Cel de-al doilea lucrator:');
// console.log(worker1.getName());
// console.log(worker1.getSurname());
// console.log(worker1.getRate());
// console.log(worker1.getHours());
// worker1.increaseSalary(2);
// console.log(worker1.getSalary());

// let SalaryMax = worker.getSalary()>worker1.getSalary()?worker.name:worker1.name;
// console.log('Cel mai mare salariu il are: ', SalaryMax);


