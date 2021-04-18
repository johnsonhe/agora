// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Agorum {
  // course struct stores a record of course metadata
  struct Course {
    address payable creator;
    string title;
    string description;
    string[] categories;
    uint256 created_at;
  }

  // state variables
  Course course; // course metadata of the agorum
  // payroll of Agorum contributors
  mapping(address => uint) public contributors;

  // event emitted whenever a new agorum is created
  event AgorumCreated(
    address agorumCreator,
    string title,
    string description,
    string[] categories,
    uint created_at
  );

  // event emitted whenever someone pays tokens to contract, such as unlocking course content
  event ReceivedTokens(address from, uint amount);

  /** @dev Creates a new course skeleton and pushes it to list
    * @param _title course title
    * @param _description course description
    * @param _categories the categories the course belongs to
   */
  function createNewCourseSkeleton(
    string calldata _title,
    string calldata _description,
    string[] calldata _categories
  ) external {
    uint created_at = block.timestamp;
    course = Course(payable(msg.sender), _title, _description, _categories, created_at);

    emit AgorumCreated(msg.sender, _title, _description, _categories, created_at);
  }

  /** @dev Adds a new contributor to payroll along with their reward
    * @param _contributorAddress the address of the contributor to add
    * @param _reward the reward set by community standard
   */
  function addContributor(address _contributorAddress,  uint _reward) external {
    contributors[_contributorAddress] = _reward;
  }

  /** @dev Pays a contributor on the payroll when funds are available
   */
  function payContributor() internal {

  }

  receive() external payable {
    emit ReceivedTokens(msg.sender, msg.value);
  }
}

// contract Course {
//   // state variables


//   constructor(
//     address payable _creator,
//     string memory _title,
//     string memory _description,
//     string[] memory _categories,
//     uint256 _created_at
//   ) {
//     creator = _creator;
//     title = _title;
//     description = _description;
//     categories = _categories;
//     created_at = _created_at;
//   }

//   function getCourseDetails() public {

//   }
// }