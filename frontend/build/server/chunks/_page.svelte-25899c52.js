import { c as create_ssr_component, o as onMount, d as afterUpdate, v as validate_component, f as add_attribute, h as each, e as escape, i as null_to_empty } from './index2-5fbea09f.js';
import io from 'socket.io-client';
import { D as DIR } from './2-be952709.js';
import { format } from 'timeago.js';
import './index-c8c7c629.js';

const css$3 = {
  code: "div.svelte-nhcd1h{display:flex;align-self:flex-end;width:100%;height:min-content;gap:12px}form.svelte-nhcd1h{display:flex;width:100%}input.svelte-nhcd1h{width:100%;padding:8px 20px;border:none;outline:1px solid #000000;border-radius:20px;font-size:20px}input.svelte-nhcd1h:focus{outline:2px solid #000000}button.svelte-nhcd1h{display:flex;justify-content:center;align-items:center;padding:10px;border:none;border-radius:50%;background-color:#e2514c;font-size:20px;color:#ffffff;cursor:pointer}i.svelte-nhcd1h{display:flex;justify-content:center;align-items:center;width:20px;height:20px}",
  map: null
};
const FormContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socket } = $$props;
  let message = "";
  if ($$props.socket === void 0 && $$bindings.socket && socket !== void 0)
    $$bindings.socket(socket);
  $$result.css.add(css$3);
  return `<div class="svelte-nhcd1h"><form action="" class="svelte-nhcd1h"><input type="text" placeholder="Message" class="svelte-nhcd1h"${add_attribute("value", message, 0)}></form>
  <button title="logout" class="svelte-nhcd1h"><i class="fa-solid fa-right-from-bracket svelte-nhcd1h"></i></button>
</div>`;
});
const css$2 = {
  code: ".message-container.svelte-1zoze6{display:flex;flex-wrap:wrap;width:100%;max-height:600px;overflow-y:auto;overflow-x:hidden;overscroll-behavior-y:contain;scrollbar-width:none;gap:8px}.message-content.svelte-1zoze6{display:flex;position:relative;flex-wrap:wrap;width:60%;padding:10px;border-radius:8px;background-color:#ffffff;user-select:none;gap:4px;z-index:50}.message-me.svelte-1zoze6{margin-left:auto;background-color:#caeef1;cursor:pointer}h3.svelte-1zoze6{width:100%;font-size:18px}.message-text.svelte-1zoze6{width:100%;overflow-wrap:break-word}.message-createdAt.svelte-1zoze6{margin-left:auto;font-size:14px;color:#555555}",
  map: null
};
const MessageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { messages } = $$props;
  let { alert } = $$props;
  let { tempId } = $$props;
  let { autoscroll } = $$props;
  let div;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.tempId === void 0 && $$bindings.tempId && tempId !== void 0)
    $$bindings.tempId(tempId);
  if ($$props.autoscroll === void 0 && $$bindings.autoscroll && autoscroll !== void 0)
    $$bindings.autoscroll(autoscroll);
  $$result.css.add(css$2);
  return `<div class="message-container svelte-1zoze6"${add_attribute("this", div, 0)}>${messages.length > 0 ? `${each(messages, (message) => {
    return `<div class="${escape(null_to_empty(`message-content ${message.from === username ? "message-me" : ""}`), true) + " svelte-1zoze6"}"><h3 class="svelte-1zoze6">${escape(message.from)}</h3>
		<p class="message-text svelte-1zoze6">${escape(message.body)}</p>
		<p class="message-createdAt svelte-1zoze6">${escape(format(message.createdAt))}</p>
	</div>`;
  })}` : ``}
</div>`;
});
const css$1 = {
  code: ".absolute.svelte-16ipwe4{display:grid;position:fixed;justify-content:center;align-items:flex-start;width:100vw;height:100vh;background-color:#000000bb;z-index:100}.alert-container.svelte-16ipwe4{display:flex;flex-wrap:wrap;justify-content:center;width:500px;margin-top:100px;padding:20px;border-radius:12px;background-color:#ffffff;gap:10px}p.svelte-16ipwe4{width:100%;text-align:center;font-size:32px;font-weight:700}button.svelte-16ipwe4{width:100px;padding:8px 20px;border:none;background-color:#2797e2;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-16ipwe4:hover{background-color:#2797d2}.alert-cancel.svelte-16ipwe4{background-color:#e24c27}.alert-cancel.svelte-16ipwe4:hover{background-color:#d24c27}",
  map: null
};
const AlertBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socket } = $$props;
  let { alert } = $$props;
  let { tempId } = $$props;
  let { messages } = $$props;
  if ($$props.socket === void 0 && $$bindings.socket && socket !== void 0)
    $$bindings.socket(socket);
  if ($$props.alert === void 0 && $$bindings.alert && alert !== void 0)
    $$bindings.alert(alert);
  if ($$props.tempId === void 0 && $$bindings.tempId && tempId !== void 0)
    $$bindings.tempId(tempId);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  $$result.css.add(css$1);
  return `<div class="absolute svelte-16ipwe4"><div class="alert-container svelte-16ipwe4"><p class="svelte-16ipwe4">Want delete this message?</p>
    <button class="svelte-16ipwe4">Accept
    </button>
    <button class="alert-cancel svelte-16ipwe4">Cancel
    </button></div>
</div>`;
});
const css = {
  code: "h1.svelte-1w1cr8s{margin:20px 0;text-align:center;font-size:48px}div.svelte-1w1cr8s{display:flex;flex-wrap:wrap;width:500px;min-height:660px;padding:20px;border-radius:16px;background-image:url('smiley.jpg');box-shadow:0 2px 10px #555555;gap:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let messages = [];
  let visibleMessages = [];
  let alert = false;
  let tempId = "";
  let counter = 0;
  let autoscroll = true;
  let observer;
  let unobserve;
  const socket = io(DIR, { withCredentials: true });
  onMount(() => {
    observer = new IntersectionObserver(loadMoreChats);
    function loadMoreChats(entries) {
      if (entries[0].isIntersecting) {
        autoscroll = false;
        loadChats(20);
      }
    }
    const loadChats = (num) => {
      if (messages.length > counter) {
        for (let i = 0; i < num; i++) {
          if (messages[counter + i]) {
            visibleMessages = [messages[counter + i], ...visibleMessages];
          }
        }
        counter += num;
      }
    };
    const receiveChats = (allMessages) => {
      messages = allMessages;
      loadChats(20);
    };
    const receiveMessage = (message) => {
      visibleMessages = [...visibleMessages, message];
    };
    const deletingMessage = (_id) => {
      messages = messages.filter((message) => message._id !== _id);
      visibleMessages = visibleMessages.filter((message) => message._id !== _id);
    };
    socket.on("loadchats", receiveChats);
    socket.on("message", receiveMessage);
    socket.on("delete", deletingMessage);
    return () => {
      socket.off("loadchats", receiveChats);
      socket.off("message", receiveMessage);
      socket.off("delete", deletingMessage);
    };
  });
  afterUpdate(() => {
    const loadedMessages = document.querySelectorAll(".message-content");
    if (loadedMessages.length > 0) {
      observer.observe(loadedMessages[0]);
      if (unobserve && unobserve !== loadedMessages[0]) {
        observer.unobserve(unobserve);
      }
      unobserve = loadedMessages[0];
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${alert ? `${validate_component(AlertBox, "Alert").$$render(
      $$result,
      { socket, alert, tempId, messages },
      {
        alert: ($$value) => {
          alert = $$value;
          $$settled = false;
        },
        tempId: ($$value) => {
          tempId = $$value;
          $$settled = false;
        },
        messages: ($$value) => {
          messages = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

<h1 class="svelte-1w1cr8s">Sample Svelte Chat</h1>

<div class="svelte-1w1cr8s">${validate_component(MessageContainer, "Message").$$render(
      $$result,
      {
        username: data.username,
        messages: visibleMessages,
        alert,
        tempId,
        autoscroll
      },
      {
        messages: ($$value) => {
          visibleMessages = $$value;
          $$settled = false;
        },
        alert: ($$value) => {
          alert = $$value;
          $$settled = false;
        },
        tempId: ($$value) => {
          tempId = $$value;
          $$settled = false;
        },
        autoscroll: ($$value) => {
          autoscroll = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(FormContainer, "Form").$$render($$result, { socket }, {}, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-25899c52.js.map
