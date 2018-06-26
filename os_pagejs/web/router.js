
function get (url, cb) {
  $.ajax({
    url: url,
    success: function(data) {
      cb(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
    dataType: 'text'
  });
}

window.init = {
  ctx: function (ctx, next) {
    ctx.data = {};
    ctx.partials = {};
    next();
  }
};

window.route = {
  welcome: function(ctx, next) {
    get('/welcome', function(html) {
      ctx.data.index = 1;
      ctx.partials.content = html;
      next();
    })
  }
};

window.render = {
  content: function (ctx, next) {
    get('/content', function (html) {
      var template = Hogan.compile(html);
      var content = template.render(ctx.data, ctx.partials);
      $('#content').empty().append(content);
    });
  }
};

window.done = null;
