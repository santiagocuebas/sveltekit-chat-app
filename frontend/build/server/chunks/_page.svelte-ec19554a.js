import { c as create_ssr_component, o as onMount, d as afterUpdate, v as validate_component, f as add_attribute, h as each, e as escape } from './index2-bddd7714.js';
import io from 'socket.io-client';
import { D as DIR } from './config-326b0707.js';
import { format } from 'timeago.js';
import './shared-server-fa63418b.js';

const css$3 = {
  code: "div.svelte-1d4dwg9{display:flex;align-self:flex-end;width:100%;height:min-content;margin:5px;gap:12px}form.svelte-1d4dwg9{display:flex;width:100%}input.svelte-1d4dwg9{width:100%;padding:8px 20px;border:none;outline:1px solid #000000;border-radius:20px;font-size:20px}input.svelte-1d4dwg9:focus{outline:2px solid #000000}button.svelte-1d4dwg9{display:flex;justify-content:center;align-items:center;padding:10px;border:none;border-radius:50%;background-color:#e2514c;font-size:20px;color:#ffffff;cursor:pointer}i.svelte-1d4dwg9{display:flex;justify-content:center;align-items:center;width:20px;height:20px}",
  map: null
};
const FormContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socket } = $$props;
  let message = "";
  if ($$props.socket === void 0 && $$bindings.socket && socket !== void 0)
    $$bindings.socket(socket);
  $$result.css.add(css$3);
  return `<div class="svelte-1d4dwg9"><form action="" class="svelte-1d4dwg9"><input type="text" placeholder="Message" class="svelte-1d4dwg9"${add_attribute("value", message, 0)}></form>
  <button title="logout" class="svelte-1d4dwg9"><i class="fa-solid fa-right-from-bracket svelte-1d4dwg9"></i></button>
</div>`;
});
const css$2 = {
  code: ".message-container.svelte-1wt74ak.svelte-1wt74ak{display:grid;grid-auto-rows:min-content;width:100%;max-height:700px;padding:5px;overflow-y:auto;scrollbar-width:none;gap:9px}.message-container.svelte-1wt74ak div.svelte-1wt74ak{display:grid;position:relative;grid-auto-rows:min-content;width:60%;padding:8px;border-radius:8px;background-color:#ffffff;box-shadow:0 0 1px #000000;user-select:none;row-gap:3px;z-index:50}.message-container.svelte-1wt74ak .message-me.svelte-1wt74ak{justify-self:flex-end;background-color:#caeef1;cursor:pointer}h3.svelte-1wt74ak.svelte-1wt74ak{width:100%;font-size:18px}.message-text.svelte-1wt74ak.svelte-1wt74ak{width:100%;overflow-x:hidden;overflow-wrap:break-word}.message-createdAt.svelte-1wt74ak.svelte-1wt74ak{justify-self:flex-end;font-size:14px;color:#555555}",
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
  return `<div class="message-container svelte-1wt74ak"${add_attribute("this", div, 0)}>${messages.length > 0 ? `${each(messages, (message) => {
    return `<div class="${"messages " + escape(message.from === username ? "message-me" : "", true) + " svelte-1wt74ak"}"><h3 class="svelte-1wt74ak">${escape(message.from)}</h3>
			<p class="message-text svelte-1wt74ak">${escape(message.body)}</p>
			<p class="message-createdAt svelte-1wt74ak">${escape(format(message.createdAt))}</p>
		</div>`;
  })}` : ``}
</div>`;
});
const css$1 = {
  code: ".absolute.svelte-1uhk6ll{display:grid;position:absolute;justify-content:center;align-items:flex-start;width:100%;height:100%;top:0;left:0;border-radius:16px;background-color:#000000bb;z-index:100}.alert-container.svelte-1uhk6ll{display:flex;flex-wrap:wrap;justify-content:center;width:500px;margin-top:200px;padding:20px;border-radius:12px;background-color:#ffffff;gap:10px}h3.svelte-1uhk6ll{width:100%;text-align:center;font-size:32px;font-weight:700}button.svelte-1uhk6ll{width:100px;padding:8px 20px;border:none;background-color:#2797e2;box-shadow:0 0 2px #000000;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-1uhk6ll:hover{background-color:#2797d2}.alert-cancel.svelte-1uhk6ll{background-color:#e24c27}.alert-cancel.svelte-1uhk6ll:hover{background-color:#d24c27}",
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
  return `<div class="absolute svelte-1uhk6ll"><div class="alert-container svelte-1uhk6ll"><h3 class="svelte-1uhk6ll">Want delete this message?</h3>
    <button class="svelte-1uhk6ll">Accept
    </button>
    <button class="alert-cancel svelte-1uhk6ll">Cancel
    </button></div>
</div>`;
});
const css = {
  code: "h1.svelte-e9pp0o{margin:20px 0;text-align:center;font-size:48px}div.svelte-e9pp0o{display:flex;position:relative;flex-wrap:wrap;width:600px;max-width:600px;min-height:660px;padding:15px;border-radius:16px;background-image:url('/smiley.jpg');box-shadow:0 2px 10px #555555;row-gap:10px}",
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
    const loadedMessages = document.querySelectorAll(".messages");
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
    $$rendered = `<h1 class="svelte-e9pp0o">Sample Svelte Chat</h1>

<div class="svelte-e9pp0o">${alert ? `${validate_component(AlertBox, "Alert").$$render(
      $$result,
      {
        socket,
        alert,
        tempId,
        messages: visibleMessages
      },
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
          visibleMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
	${validate_component(MessageContainer, "Message").$$render(
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
//# sourceMappingURL=_page.svelte-ec19554a.js.map
