Feature: Website

    Scenario: Title exists initially
    Given the webpage is loaded
    Then the title is "CAT'S NEW WEB PAGE"

    Scenario: Button click changes background color
    When the button is clicked
    Then the background turns grey