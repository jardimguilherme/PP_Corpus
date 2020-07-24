define(["jquery","underscore","pubsub","managers/cachemanager"],function(t,e,n,r){"use strict";var o=function(){this.initialize()};return o.prototype={PREFERRED_ACCOUNT_KEY:"userPreferredAccount",PREFERRED_ACCOUNT_TIMEOUT:525600,initialize:function(){this.resetManager(),this.preferredAccount&&(this.state="loggingIn",n.on("page:load",this.autoLogin,this)),n.on("user:statuschange",this._userStatusChange,this)},destroy:function(){this.resetManager(),n.off("user:statuschange",this._userStatusChange,this),n.off("page:load",this.autoLogin,this)},autoLogin:function(){this.state=null,this.loginUser(this.preferredAccount,!0).fail(e.bind(function(){this.logoutUser()},this)),n.off("page:load",this.autoLogin,this)},registerAccount:function(t){var e=t.getName();return this.accounts[e]?void console.error("duplicate account name given to registerAccount"):void(this.accounts[e]=t)},unRegisterAccount:function(t){var e=t.getName();this.accounts[e]?this.accounts[e]=null:console.error("unRegisterAccount called on name that isn't registered!"),t.logout(),this.preferredAccount===e&&this.setPreferredAccount(null)},loginUser:function(t,e){return this._askAccount("login",t,e)},_userStatusChange:function(t,e,n){"loggedIn"===e?this._onLoginSuccess(t,n):"loggedOut"===e&&this._onLogoutSuccess(t)},_onLoginSuccess:function(t,e){this.setPreferredAccount(t),n.trigger("user:login",e,t)},setPreferredAccount:function(t){var e=this.getPreferredAccountLookupKey();t?r.setValue(e,t,this.PREFERRED_ACCOUNT_TIMEOUT):r.clearValue(e),this.preferredAccount=t},getPreferredAccountLookupKey:function(){return this.PREFERRED_ACCOUNT_KEY},getPreferredAccount:function(){return this.preferredAccount||r.getValue(this.getPreferredAccountLookupKey(),null,this.PREFERRED_ACCOUNT_TIMEOUT)},getLoginStatus:function(t){var e,n=this.getAccount(t);return e=n?n.getLoginStatus():"loggedOut",this.state||e},logoutUser:function(t){return this._askAccount("logout",t)},logoutAll:function(){return t.when.apply(t,e.map(this.accounts,function(t){return t.logout()}))},_onLogoutSuccess:function(t){n.trigger("user:logout",t),t===this.getPreferredAccount()&&this.setPreferredAccount(null)},getAccount:function(t){return this.accounts[t||this.preferredAccount]},getUserInfo:function(t){return this._askAccount("getUserInfo",t)},getCoreUserInfo:function(t){return this._askAccount("getCoreUserInfo",t)},resetManager:function(){this.accounts={},this.preferredAccount=this.getPreferredAccount()},_askAccount:function(e,n){var r=this.getAccount(n);return r?r[e]?r[e].apply(r,Array.prototype.slice.call(arguments,2)):t.Deferred().reject("Account "+(n||this.preferredAccount)+" does not support method "+e):t.Deferred().reject("Invalid Account")}},new o});
//# sourceMappingURL=usermanager.js
//# sourceMappingURL=usermanager.js.map