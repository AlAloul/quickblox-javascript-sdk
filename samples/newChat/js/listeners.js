'use strict';

/**
 * Full user's callbacks (listener-functions) list:
 * - onMessageListener
 * - onMessageErrorListener (messageId, error)
 * - onSentMessageCallback(messageLost, messageSent)
 * - onMessageTypingListener
 * - onDeliveredStatusListener (messageId, dialogId, userId);
 * - onReadStatusListener (messageId, dialogId, userId);
 * - onSystemMessageListener (message)
 * - onContactListListener (userId, type)
 * - onSubscribeListener (userId)
 * - onConfirmSubscribeListener (userId)
 * - onRejectSubscribeListener (userId)
 * - onDisconnectedListener
 * - onReconnectListener
 */


function Listeners(){};

Listeners.prototype.onMessageListener = function(){

};

Listeners.prototype.onSentMessageCallback(){

};

Listeners.prototype.onMessageTypingListener = function(){

}

Listeners.prototype.onReadStatusListener = function(){

}

Listeners.prototype. = function(){

}

var listeners = new Listeners();
