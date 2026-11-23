'use strict';

const menuButton = document.querySelector('#menuToggle');
const navigation = document.querySelector('#mainNav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
    }
  });
}

const copyButton = document.querySelector('#copyName');
const copyStatus = document.querySelector('#copyStatus');

async function copyProjectName() {
  const projectName = 'PRIMORSK RP';
  if (!copyStatus) return;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(projectName);
    } else {
      const temporary = document.createElement('textarea');
      temporary.value = projectName;
      temporary.setAttribute('readonly', '');
      temporary.style.position = 'fixed';
      temporary.style.opacity = '0';
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand('copy');
      temporary.remove();
      if (!copied) throw new Error('Буфер обмена недоступен');
    }
    copyStatus.textContent = 'Название скопировано — ищи PRIMORSK RP в Roblox.';
  } catch (error) {
    copyStatus.textContent = 'Скопируй название вручную: PRIMORSK RP';
  }
}

if (copyButton) copyButton.addEventListener('click', copyProjectName);

// Аккордеон: открытым остаётся один пункт, выбранный читателем.
document.querySelectorAll('.rules-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.rules-list details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
