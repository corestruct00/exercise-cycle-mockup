(function () {
  document.querySelectorAll('[data-toggle="collapse"]').forEach(function (h) {
    h.addEventListener('click', function (e) {
      if (e.target.closest('.tooltip-icon-container')) return;
      var c = document.querySelector(h.getAttribute('data-target'));
      if (!c) return;
      var open = c.classList.toggle('show');
      c.classList.toggle('in', open);
      c.querySelectorAll(':scope > .panel-body').forEach(function (b) { b.hidden = !open; });
      var i = h.querySelector('.fa');
      if (i) i.className = 'fa ' + (open ? 'fa-caret-down' : 'fa-caret-right');
    });
  });

  function closeAll(except) {
    document.querySelectorAll('.btn-group.open').forEach(function (g) {
      if (g !== except) g.classList.remove('open');
    });
  }
  document.querySelectorAll('[data-toggle="dropdown"]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var g = b.parentElement;
      closeAll(g);
      g.classList.toggle('open');
    });
  });
  document.addEventListener('click', function () { closeAll(null); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
})();
