create database cms
go

use cms
go

create table Customer
(
   custId INT Primary Key,
   custName varchar(30),
   custUserName varchar(30),
   custPassword varchar(30),
   city varchar(30),
   state varchar(30),
   email varchar(30),
   mobileNo varchar(20)
)
Go

select * from Customer

INSERT INTO Customer (custId, custName, custUserName, custPassword, city, state, email, mobileNo)
VALUES 
(1, 'Aashish Morya', 'aashishmk', 'password123', 'SRE', 'UP', 'aashish@gmail.com', '1234567890'),
(2, 'Mohit', 'mohitkm', 'password456', 'DEL', 'IN', 'mohitmk@gmail.com', '9876543210'),
(3, 'Shivam', 'Shivam02', 'password789', 'Shamli', 'UP', 'shivam02@gmail.com', '5556667777'),
(4, 'Govind', 'govind33', 'password000', 'Saharanpur', 'UP', 'goving33@gmail.com', '4443332222'),
(5, 'Rajendra', 'raj2202', 'password999', 'Hasanpur', 'MP', 'raj3302@gmail.com', '7778889999');

create table Wallet 
(
   walletId int primary key identity(1,1),
   custId INT,
   walletType varchar(30),
   walletAmount numeric(9,2)
)

INSERT INTO Wallet (custId, walletType, walletAmount) 
VALUES 
(1, 'Credit', 5000.00),
(2, 'Debit', 2500.00),
(3, 'Credit', 10000.00),
(4, 'Debit', 3000.00),
(5, 'Credit', 7500.00);

select * from Wallet where custId = 1

