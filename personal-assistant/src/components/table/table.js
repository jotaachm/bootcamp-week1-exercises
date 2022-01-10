import React from "react";
import { StyledTable } from "./styles";
import Button from "../button/button";


export default ({ data }) => (
    <TableMarkup titles={Object.keys(data[0])} data={data} />
);

const TableMarkup = ({ titles, data }) => (
    <StyledTable>
        <colgroup>
            <col />
            <col />
            <col />
        </colgroup>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{title}</th>))}
                <th>Complete</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {titles.map((title, index) => (
                        <td key={index}>{item[title]}</td>
                    ))}
                    <td>
                        <Button onClick={() => this.deleteCard(index)} buttonText={"Complete"}>
                        </Button>
                    </td>
                    <td>
                        <Button onClick={() => this.deleteCard(index)} buttonText={"Delete"}>
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </StyledTable>
);
