import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #6c25be;
  color: #fff;
  cursor: pointer;
`;

export const Book = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isSubmit,setSubmit]=useState(false);

    const handleSubmit = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(e.target.value)) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Date: ", date);
        console.log("Time: ", time);
        setSubmit(true);
    };

    return (
        isSubmit?<h1>Thank You for Booking an Appointment</h1>:
        <Container>
            <Title>Book an Appointment</Title>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name:
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Label>
                <Label>
                    Email:
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Label>
                <Label>
                    Date:
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Label>
                <Label>
                    Time:
                    <Input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </Label>
                <Button type="submit">Submit</Button>
            </Form>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
}
