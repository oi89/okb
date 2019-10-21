
Feature('Authorization');

Scenario('Enter valid login and password', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.click('Войти с логином и паролем');
	I.fillField({xpath: "//input[@id='userName']"}, 'test@test.ru');
	I.fillField({xpath: "//input[@id='password']"}, 'testMePlease');
	I.click('Войти');
	I.see('Осталось подтвердить данные', {xpath: "//h1[@class='h1 form__title']"});
	// Тест падает из-за появления проверочной капчи
});

Scenario('Enter not valid data', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.click('Войти с логином и паролем');
	I.fillField({xpath: "//input[@id='userName']"}, 'test@test.ru');
	I.fillField({xpath: "//input[@id='password']"}, 'test');
	I.click('Войти');
	I.waitForElement({xpath: "//div[@class='ng-star-inserted']"});
	I.see('Некорректный логин или пароль.', {xpath: "//div[@class='ng-star-inserted']"});
	// Тест падает из-за появления проверочной капчи
});

Scenario('Enter empty data', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.click('Войти с логином и паролем');
	I.seeElement({xpath: '//button[@class="js-btn btn btn_lg"]', props: {disabled: "disabled"}});
});
