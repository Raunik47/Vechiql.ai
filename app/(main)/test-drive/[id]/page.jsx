import React from "react";

export async function generateMetadata() {
  return {
    title: `Book Test Drive | Vehial`,
    description: `Schedule a test drive in few seconds`,
  };
}

const TestDrivePage = ({ params }) => {
  return <div>TestDrivePage</div>;
};

export default TestDrivePage;