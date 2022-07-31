export const $$ = (selector:any) => {
  let elements:any = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : [...elements];
};

export const reRender = async (component:any, position:any) => {
  if (position) {
    $$(position).innerHTML = await component.render();
  }
  if(component.afterRender) await component.afterRender();
};
