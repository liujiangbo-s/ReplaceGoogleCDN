let rule_example = {
  "redirect-domain": `redirect-domain.json`,
  "block-domain": `block-domain.json`,
  "modify-header-ua": `rules_modify_request_header_ua.json`,
  "modify-header-request-x": `rules_modify_request_header_x.json`,
  "modify-header-request-cookie": `rules_modify_request_header_cookie.json`,
  "modify-header-response-x": `rules_modify_response_header_x.json`,
  "modify-header-response-csp": `rules_modify_response_header_csp.json`,
};

let rule_example_urls = `
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/auth.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_1.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_2.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_block_request.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_redirect_extra.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_remove_content_security_policy_header.json?raw=true

`;

export { rule_example, rule_example_urls };
