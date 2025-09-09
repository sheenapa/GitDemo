Feature: Verify Login Functionality

    Scenario: Verify Login with Valid Credentials

        Given User launch the application
        When User enter the username as "Admin" and password as "admin123"
        And User click on the login button
        Then User should be navigated to the dashboard

    Scenario Outline: Verify Login with Invalid Credentials
        Given User launch the application
        When User enter the username as "<username>" and password as "<password>"
        And User click on the login button
        Then User should see an login error message

        Examples:
            | username | password |
            | Admin    | qwerty   |
            | tyuiop   | admin123 |
            | user     | pass123  |
