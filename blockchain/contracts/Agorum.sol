// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

// import "@openzeppelin/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Agorum {
  using SafeMath for uint256;

  // store list of all courses
  Course[] private courses;
  uint courseCount;

  // event emitted whenever a new agorum is created
  event AgorumCreated(
    address courseAddress,
    address agorumCreator,
    string title,
    string description,
    string[] categories,
    uint created_at
  );

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
    Course newCourse = new Course(payable(msg.sender), _title, _description, _categories, created_at);
    courses.push(newCourse);

    emit AgorumCreated(address(newCourse), msg.sender, _title, _description, _categories, created_at);
  }

  function getCourse(uint index) external view returns(Course) {
    return courses[index];
  }
}

contract Course {
  using SafeMath for uint256;

  // state variables
  address payable public creator;
  string public title;
  string public description;
  string[] public categories;
  uint256 public created_at;

  constructor(
    address payable _creator,
    string memory _title,
    string memory _description,
    string[] memory _categories,
    uint256 _created_at
  ) {
    creator = _creator;
    title = _title;
    description = _description;
    categories = _categories;
    created_at = _created_at;
  }
}