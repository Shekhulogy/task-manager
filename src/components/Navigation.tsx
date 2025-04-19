const Navigation = () => {
  return (
    <div className="p-2">
      <p className="p-2 px-2 text-xs font-medium text-gray-500">Navigate</p>
      <ul>
        <li className="w-full h-8 flex gap-2 p-2 items-center text-sm text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-list-todo h-4 w-4"
            data-lov-id="src/components/AppSidebar.tsx:121:18"
            data-lov-name="ListTodo"
            data-component-path="src/components/AppSidebar.tsx"
            data-component-line="121"
            data-component-file="AppSidebar.tsx"
            data-component-name="ListTodo"
            data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"
          >
            <rect x="3" y="5" width="6" height="6" rx="1"></rect>
            <path d="m3 17 2 2 4-4"></path>
            <path d="M13 6h8"></path>
            <path d="M13 12h8"></path>
            <path d="M13 18h8"></path>
          </svg>
          <span>All Tasks</span>
        </li>
        <li className="w-full h-8 flex gap-2 p-2 items-center text-sm text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-check h-4 w-4"
            data-lov-id="src/components/AppSidebar.tsx:145:18"
            data-lov-name="CheckCircle2"
            data-component-path="src/components/AppSidebar.tsx"
            data-component-line="145"
            data-component-file="AppSidebar.tsx"
            data-component-name="CheckCircle2"
            data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <span>Completed</span>
        </li>
        <li className="w-full h-8 flex gap-2 p-2 items-center text-sm text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-clock h-4 w-4"
            data-lov-id="src/components/AppSidebar.tsx:127:18"
            data-lov-name="Clock"
            data-component-path="src/components/AppSidebar.tsx"
            data-component-line="127"
            data-component-file="AppSidebar.tsx"
            data-component-name="Clock"
            data-component-content="%7B%22className%22%3A%22h-4%20w-4%22%7D"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Due Soon</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
