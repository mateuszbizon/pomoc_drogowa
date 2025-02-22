import { Body, Button, Container, Heading, Html, Row, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
    name: string;
    phone: string;
    description: string;
}

export default function Welcome({ name, phone, description }: WelcomeProps) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-slate-500">
            <Container className="bg-white p-5 rounded-lg">
                <Heading className="mb-10 text-center">Welcome Admin!</Heading>
                <Heading as="h2" className="text-center">New client: {name}</Heading>
                <Section>
                    <Row>
                        <Text>Phone: {phone}</Text>
                        <Text>Description: {description}</Text>
                    </Row>
                </Section>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}