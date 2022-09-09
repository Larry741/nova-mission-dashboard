import React, { useMemo } from "react";
import { Appear, Table, Paragraph, withStyles } from "arwes";

const styles = () => ({
  fontSize: {
    fontSize: "21px",

    "@media (max-width: 800px)": {
      fontSize: "19px",
    },
    "@media (max-width: 480px)": {
      fontSize: "18px",
    },
  },
});

const History = props => {
  const { entered, launches, classes, abortLaunch } = props;

  const tableBody = useMemo(() => {
    if (!props.launches) {
      return <></>
    }

    return [...props.launches].reverse().filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <span style={{ color: launch.success ? "greenyellow" : "red" }}>
                █
              </span>
            </td>
            <td>{launch.flightNumber}</td>
            <td>{new Date(launch.launchDate).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocketName}</td>
            <td>{launch.customers ? launch.customers.join(", ") : null}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        <Paragraph className={classes.fontSize}>
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </Paragraph>
        <Table animate>
          <table style={{ tableLayout: "fixed", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ width: "2rem" }}></th>
                <th style={{ width: "3rem" }}>No.</th>
                <th style={{ width: "9rem" }}>Date</th>
                <th style={{ width: "9rem" }}>Mission</th>
                <th style={{ width: "7rem" }}>Rocket</th>
                <th style={{ width: "9rem" }}>Customers</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
}
  
export default withStyles(styles)(History);