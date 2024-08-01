import React from "react";
import { SocialIcon } from "react-social-icons";

const Team = () => {
  const sourav= <SocialIcon url="https://www.linkedin.com/in/sourav-singha-975165236/" />
  //const Shayori= <SocialIcon url="" />
  const madhurima= <SocialIcon url="https://www.linkedin.com/in/madhurima11072003" />

  return (
    <div className="teamContainer">
      <h1>...Our Team Members...</h1>
      <div className="tableContainer">
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Social Media</th>
          </tr>
          <tr>
            <td>Shayori Bhowmic</td>
            <td>132324</td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td>Sourav Singha</td>
            <td>7602975908</td>
            <td>{sourav}</td>
          </tr>
          <tr>
            <td>Krity Priya</td>
            <td>132324</td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td>Madhurima Kumari</td>
            <td>132324</td>
            <td>{madhurima}</td>
          </tr>
          <tr>
            <td>Anupras Pahari</td>
            <td>132324</td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td>Rajdeep Mukherjee</td>
            <td>132324</td>
            <td>linkedin</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Team;
