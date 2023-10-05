import Button from "@/components/atoms/Button";

export default function WritePage() {
  return (
    <section>
      <div>
        <input type="text" className="border-1-black" />
        <div>
          <input type="file" />
          <Button>작성완료</Button>
        </div>
      </div>
      <textarea className="w-80"></textarea>
    </section>
  );
}
