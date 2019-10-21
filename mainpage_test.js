
Feature('MainPage');

Scenario('Check h1 element', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.waitForElement({css: "h1[class='h1 form__title']"});
	I.seeElement({css: "h1[class='h1 form__title']"});
});

Scenario('Check Sberbank title', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	//locate('span')
		//.inside('a.signin-form__btn btn btn_sber');
	I.see('Войти по Сбербанк ID', {xpath: "//a[@class='signin-form__btn btn btn_sber']"});
});

Scenario('Check Gosuslugi title', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.see('Войти через Госуслуги', {xpath: "//a[@class='signin-form__btn btn btn_gos']"});
});

Scenario('Check auth link', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.see('Войти с логином и паролем');
	I.seeElement({xpath: '//div[@class="form__links-link"]/a', props: {href: "/account/authorization"}});
});

Scenario('Checkbox termsOfUse is checked', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.seeCheckboxIsChecked({xpath: "//input[@name='termsOfUseAgree']"});
});

Scenario('Go to auth link', (I) => {
	I.amOnPage('https://ucbreport.ru/');
	I.click('Войти с логином и паролем');
	I.see('Вход в личный кабинет', {css: "h1[class='h1 form__title']"});
});