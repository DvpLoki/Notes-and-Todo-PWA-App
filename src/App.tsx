import {
  Content,
  RootLayout,
  Sidebar,
  ActionButtonRow,
  NotePreviewList,
  MarkdownEditor,
} from "./Components";
import NoteTitle from "./Components/NoteTitle";

export default function App() {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2 bg-zinc-800/50">
          <ActionButtonRow className=" mt-10 flex justify-between mr-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <NoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  );
}
