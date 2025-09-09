Feature: Verify Add Job Title Functionality


    Feature Description
    This feature verifies the functionality of adding a new job title in the application.
    It includes scenarios for adding job titles with various details and validating error messages for missing mandatory fields.


  Background: Launch the application and login
        Given User launch the application
        When User enter the username as "Admin" and password as "admin123"
        And User click on the login button
        Then User should be navigated to the dashboard

    Scenario Outline: Add a new job title with various details
        When User click on Admin menu and click on Job and then click on Job Titles
        And User click on the Add button
        And User enter the job title as "<JobTitle>" and job description as "<JobDescription>"
        And User click on the save button
        Then User should see a success message for adding the job title
        And User should see the Jobtitle text in the saved page
       
        Examples:
            | JobTitle        | JobDescription               |
            | Software Engineer | Responsible for software development |
            | HR Manager      | Manages human resources      |
            | Sales Executive | Handles sales and client relationships |

    Scenario: Verify the error message for missing mandatory fields
        When User click on Admin menu and click on Job and then click on Job Titles
        And User click on the Add button
        And User click on the save button
        Then User should see an error message for missing mandatory fields

    Scenario: Verify the error message for duplicate job title
        When User click on Admin menu and click on Job and then click on Job Titles
        And User click on the Add button
        And User enter the job Title as "Software Engineer" and job Description as "Responsible for software development"
        Then User should see an error message for duplicate job title
