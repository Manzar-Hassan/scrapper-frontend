import React, { useState } from "react";
import { Table, Container, Button } from "reactstrap";
import axios from "axios";

const App = () => {
  const [scrappedData, setScrappedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchScrappedData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:5000/");
      setScrappedData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>sl.</th>
            <th>Alias</th>
            <th>Time</th>
            <th>Teams</th>
            <th>1</th>
            <th>x</th>
            <th>2</th>
            <th>1x</th>
            <th>12</th>
            <th>x2</th>
            <th>under</th>
            <th>over</th>
            <th>goal</th>
            <th>nogoal</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? 
            <tr><td colspan={15}>Please wait...</td></tr>   
            : scrappedData
            ? scrappedData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.alias}</td>
                  <td>{data.time}</td>
                  <td>{data.teams}</td>
                  <td>{data.bet1}</td>
                  <td>{data.betx}</td>
                  <td>{data.bet2}</td>
                  <td>{data.betx1}</td>
                  <td>{data.bet12}</td>
                  <td>{data.x2}</td>
                  <td>{data.under}</td>
                  <td>{data.over}</td>
                  <td>{data.goal}</td>
                  <td>{data.nogoal}</td>
                  <td>{data.value}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <Button onClick={fetchScrappedData}>Scrape Data</Button>
    </Container>
  );
};

export default App;
