Feature: Calculator

  Scenario: Add two numbers
    Given I have the number <First Number>
    When I add <Second Number>
    Then I should have <Result>

    Examples:
    | First Number | Second Number | Result |
    |            1 |             2 |      3 |
    |            2 |             2 |      4 |
    |            3 |             9 |     12 |