Feature: Verify Add Employee Functionality

    Background: Launch the application and login
        Given User launch the application
        When User enter the username as "Admin" and password as "admin123"
        And User click on the login button
        Then User should be navigated to the dashboard

    Scenario Outline: Add a new employee with mandatory details
        When User click on PIM menu and click on Add Employee
        And User enter the firstname as "<FirstName>" and lastname as "<LastName>"
        And User capture the employee id as "<EmployeeID>"
        And User click on the save button
        Then User should be navigated to the personal details page

        Examples:
            | FirstName | LastName | EmployeeID |
            | John      | Doe      | 12345      |
            | Jane      | Smith    | 67890      |
            | Alice     | Johnson  | 54321      |

    Scenario: Verify the error message for missing mandatory fields
        When User click on PIM menu and click on Add Employee
        And User click on the save button
        Then User should see the error message for mandatory fields

