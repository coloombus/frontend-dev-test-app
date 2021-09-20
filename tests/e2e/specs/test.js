// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "users page test": (browser) => {
    browser
      .url("http://localhost:8081/#/users")
      .waitForElementVisible(".users-list ul li")
      .assert.elementPresent(".users-list")
      .assert.elementPresent("ul")
      .assert.containsText("li:nth-child(1) > div.user-name", "Valentina Rossi")
      .assert.containsText(
        "li:nth-child(1) > div.user-email a",
        "vrossi@coloombus.com"
      )
      .assert.attributeContains(
        "li:nth-child(1) > div.user-email a",
        "href",
        "mailto:vrossi@coloombus.com"
      )
      .assert.containsText(
        "li:nth-child(1) > div.user-phone a",
        "+393333333333"
      )
      .assert.attributeContains(
        "li:nth-child(1) > div.user-phone a",
        "href",
        "tel:+393333333333"
      )

      .assert.containsText("li:nth-child(2) > div.user-name", "Marco Russo")
      .assert.containsText(
        "li:nth-child(2) > div.user-email a",
        "mrusso@coloombus.com"
      )
      .assert.attributeContains(
        "li:nth-child(2) > div.user-email a",
        "href",
        "mailto:mrusso@coloombus.com"
      )
      .assert.containsText(
        "li:nth-child(2) > div.user-phone a",
        "+392224444444"
      )
      .assert.attributeContains(
        "li:nth-child(2) > div.user-phone a",
        "href",
        "tel:+392224444444"
      )

      .assert.containsText(
        "li:nth-child(3) > div.user-name",
        "Federica Valenti"
      )
      .assert.containsText(
        "li:nth-child(3) > div.user-email a",
        "fvalenti@coloombus.com"
      )
      .assert.attributeContains(
        "li:nth-child(3) > div.user-email a",
        "href",
        "mailto:fvalenti@coloombus.com"
      )
      .assert.containsText(
        "li:nth-child(3) > div.user-phone a",
        "+393395555555"
      )
      .assert.attributeContains(
        "li:nth-child(3) > div.user-phone a",
        "href",
        "tel:+393395555555"
      )
      .end();
  },
};
